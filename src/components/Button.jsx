import { FaRocketchat } from 'react-icons/fa';

export const Button = (props) => {
  const { setChatStatus } = props;
  return (
    <>
      <button
        className="chat-widget"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0, 123, 0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          color: 'white',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 123,255, 0,3)';
        }}
        onClick={(e) => {
          setChatStatus((prev) => !prev);
        }}
      >
        <FaRocketchat size={30} />
      </button>
    </>
  );
};
