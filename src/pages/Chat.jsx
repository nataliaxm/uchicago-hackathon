import { useState, useRef, useEffect } from 'react'
import { createChat, sendMessage } from '../utils/gemini'
import ChatMessage from '../components/ChatMessage'

const SUGGESTED = [
  "What documents do I need to rent an apartment in the US?",
  "What should I look for before signing a lease?",
  "How do I know my tenant rights?",
  "What is Section 8 housing assistance?",
  "How can I rent without a US credit score?",
  "What are common rental scams to avoid?",
]

const INITIAL_MESSAGE = {
  role: 'model',
  content: "Hello! I'm SafeNest AI, your housing guide for the United States. I can help you understand leases, tenant rights, neighborhood information, and much more. What questions do you have about finding housing in America?",
}

export default function Chat() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const chatRef = useRef(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function getChat() {
    if (!chatRef.current) {
      chatRef.current = await createChat()
    }
    return chatRef.current
  }

  async function handleSend(text) {
    const userMessage = (text ?? input).trim()
    if (!userMessage || loading) return

    setInput('')
    setError(null)
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const chat = await getChat()
      const response = await sendMessage(chat, userMessage)
      setMessages(prev => [...prev, { role: 'model', content: response }])
    } catch (err) {
      setError(err.message || 'Failed to get a response. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const hasApiKey = !!import.meta.env.VITE_GEMINI_API_KEY
  const showSuggestions = messages.length === 1 && !loading

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col" style={{ height: 'calc(100vh - 4rem)' }}>
      <div className="mb-4 flex-shrink-0">
        <h1 className="text-2xl font-bold text-slate-800">AI Housing Assistant</h1>
        <p className="text-slate-500 text-sm">Powered by Google Gemini · Ask anything about renting in the US</p>
      </div>

      {!hasApiKey && (
        <div className="mb-4 flex-shrink-0 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Setup required:</strong>
          <span className="text-amber-700"> Create a <code className="bg-amber-100 px-1 rounded">.env</code> file and add{' '}
            <code className="bg-amber-100 px-1 rounded">VITE_GEMINI_API_KEY=your_key_here</code>,
            then restart the dev server.
          </span>
        </div>
      )}

      {/* Message area */}
      <div className="flex-1 overflow-y-auto bg-slate-50 rounded-xl p-4 mb-4 border border-slate-200 min-h-0">
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}

        {loading && (
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              AI
            </div>
            <div className="bg-white rounded-2xl rounded-bl-sm border border-slate-200 px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                {[0, 150, 300].map(delay => (
                  <span
                    key={delay}
                    className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions */}
      {showSuggestions && (
        <div className="mb-3 flex-shrink-0">
          <p className="text-xs text-slate-500 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED.map(q => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 px-3 py-1.5 rounded-full transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={e => { e.preventDefault(); handleSend() }}
        className="flex gap-2 flex-shrink-0"
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about renting in the US..."
          disabled={loading}
          className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-medium px-5 py-3 rounded-xl transition-colors text-sm"
        >
          Send
        </button>
      </form>
    </div>
  )
}
