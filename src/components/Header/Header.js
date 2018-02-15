import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation.js'
import styles from './Header.module.scss';

class Header extends Component {
  static propTypes = {
    siteUrl: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired,
  };

  state = {
    isNavActive: false,
  };

  toggleNav = () => this.setState({ isNavActive: !this.state.isNavActive });

  render() {
    const { siteUrl, siteName } = this.props;
    const { isNavActive } = this.state;

    return (
      <header className={styles.root}>
        <a href={siteUrl} className={styles.logo}>{siteName}</a>
        <button className={styles.toggle} onClick={this.toggleNav}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Navigation isActive={isNavActive} />
      </header>
    );
  }
} 

export default Header;
