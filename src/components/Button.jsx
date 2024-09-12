import { Link } from 'react-router-dom'

export default function Button({link, text, type, fullWidth, iconRight, iconLeft }) {
    const typeStyle = {
		"primary": "btn-primary",
		"secondary": "btn-secondary",
		"primary-outline": "btn-primary-outline",
		"secondary-outline": "btn-secondary-outline"
	}

    const btnType = typeStyle[type] || typeStyle["primary"]

	return (
		<Link to={link} className={`${btnType} ${fullWidth && 'full-width'} ${iconLeft && 'icon-left'} ${iconRight && 'icon-right'}`}>
            {iconLeft}
			{text}
            {iconRight}
		</Link>
	)
}
