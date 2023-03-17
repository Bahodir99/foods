import React from 'react'
import './Nav__panel.scss'
function Nav__panel() {
    return (
        <div>
            <header>
                <div className="header__inner">
                    <ul className='header__list'>
                        <li className='header__item active'>
                            <span className='header__icon'>
                                <i class="bi bi-house-door"></i>
                            </span>
                        </li>
                        <li className='header__item'>
                            <span>
                                <i class="bi bi-percent"></i>
                            </span>
                        </li>
                        <li className='header__item'>
                            <span>
                                <i class="bi bi-pie-chart"></i>
                            </span>
                        </li>
                        <li className='header__item'>
                            <span>
                                <i class="bi bi-envelope"></i>
                            </span>
                        </li>
                        <li className='header__item'>
                            <span>
                                <i class="bi bi-bell"></i>
                            </span>
                        </li>
                        <li className='header__item'>
                            <span>
                                <i class="bi bi-gear"></i>
                            </span>
                        </li>
                        <li className='header__item'>
                            <span>
                                <i class="bi bi-box-arrow-right"></i>
                            </span>
                        </li>
                        <li className='header__item'>
                            <span>

                            </span>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Nav__panel
