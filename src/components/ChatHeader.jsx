import { GiCrossedBones } from 'react-icons/gi';

export const ChatHeader = ({toggleEvent}) => {
  return (
    <>
      <div
        className="chat-header"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#4ade80',
              borderRadius: '50%',
            }}
          ></div>
          <span style={{ fontWeight: '600' }}>Chat Support</span>
        </div>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '18px',
            padding: '4px',
            borderRadius: '50%',
            outline: 'none',
          }}

          onClick={()=> toggleEvent(prev => !prev)}
        >
          <GiCrossedBones color="#000000" />
        </button>
      </div>
    </>
  );
};
