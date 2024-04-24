import React from 'react'

const Stats = () => {
  return (
    <div className='stats gradient-border'>
        <div className="metrics">
            <span className="metric-title">Coin Quest Price</span>
            <span className="metric-value">$0.15 USD</span>
        </div>
        <div className="metrics">
            <span className="metric-title">Supports</span>
            <span className="metric-value">5 Chains</span>
        </div>
        <div className="metrics">
            <span className="metric-title">Total Liquidity</span>
            <span className="metric-value">$75M</span>
        </div>
        <div className="metrics">
            <span className="metric-title">Total Trades</span>
            <span className="metric-value">$6.725M</span>
        </div>
        <div className="metrics">
            <span className="metric-title">Daily Users</span>
            <span className="metric-value">70.7k+</span>
        </div>
    </div>
  )
}

export default Stats