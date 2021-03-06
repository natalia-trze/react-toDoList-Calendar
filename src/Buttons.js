import Button from 'react-bootstrap/Button';

export default function ButtonList({buttons, callback}) {
  
    return (
      <div className="button-list">
        {buttons.map((b) => (
           <Button key={b} onClick={() => callback(b)} className="theme-btn" variant="outline-dark">{b}</Button>
        ))}
      </div>
    );
  }
  