import ChatBox from "../../components/chatBox";
import ChatBar from "../../components/ChatBar";

function Chat() {
  let closed = false;
  function handleSidebarCollapse(e) {
    closed = false ? closed : true;
    if (closed) {
      closed = true;
    } else {
      closed = false;
    }
  }
  return (
    <section className="container-fluid p-3 d-flex top-container flex-row flex-nowrap">
      <ChatBar />
      <ChatBox />
    </section>
  );
}

export default Chat;
