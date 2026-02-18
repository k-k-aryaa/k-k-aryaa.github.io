
import React from 'react'

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', background: 'var(--bg-secondary)' }}>
            <p>&copy; {new Date().getFullYear()} K.K. Aryaa. All rights reserved.</p>
        </footer>
    )
}

export default Footer
