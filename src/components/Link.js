import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: STATUS.NORMAL
    };
  }

  onMouseEnter() {
    this.setState({ className: STATUS.HOVERED });
  }

  onMouseLeave() {
    this.setState({ className: STATUS.NORMAL });
  }

  render() {
    const { className } = this.state;
    const { page, children } = this.props;
    return (
      <a
        className={className}
        href={page || '#'}
        onMouseEnter={() => {
          this.onMouseEnter();
        }}
        onMouseLeave={() => {
          this.onMouseLeave();
        }}
      >
        {children}
      </a>
    );
  }
}
