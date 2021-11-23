import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '10px' }} >
            This page  doesn't exist. Go <Link to='/' > Home page</Link>
        </div>
    )
}

export default NotFoundPage
