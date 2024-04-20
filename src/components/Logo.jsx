import logo from '/processor.png'

export default function Logo({ size, hasText }) {
	const sizes = {
		"xs": "logo-extrasmall",
		"s": "logo-small",
		"m": "logo-medium",
		"l": "logo-large"
	}
	const logoSize = sizes[size] || sizes["s"]

	return (
		<div className={`logo ${hasText && 'logo_hastext'} ${logoSize}`}>
			<img src={logo} alt={window.name} />
			{hasText && <p>StackTracker</p>}
		</div>
	)
}
