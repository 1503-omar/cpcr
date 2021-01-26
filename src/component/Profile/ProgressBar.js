import React from 'react'

export default function ProgressBar() {
    return (
        <div>
  <ProgressBar striped variant="success" now={40} />
  <ProgressBar striped variant="info" now={20} />
  <ProgressBar striped variant="warning" now={60} />
  <ProgressBar striped variant="devlopping" now={80} />
</div>
    )
}
