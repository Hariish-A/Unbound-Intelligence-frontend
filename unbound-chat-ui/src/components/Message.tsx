interface MessageProps {
    message: string;
  }
  
  export default function Message({ message }: MessageProps) {
    return <div className="message">{message}</div>;
  }