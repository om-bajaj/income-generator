const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
}) => {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/50 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
      />
      {error ? <span className="mt-1 block text-xs text-rose-500">{error}</span> : null}
    </label>
  )
}

export default InputField
