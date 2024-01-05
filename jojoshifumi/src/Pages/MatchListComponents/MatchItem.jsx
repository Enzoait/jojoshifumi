export default function MatchItem({ match, onDelete, onToggleStatus }) {
    const handleItemClick = (event) => {
      if (event.currentTarget === event.target) {
        onToggleStatus();
        event.stopPropagation();
      }
    };
  
    return (
      <div
        onClick={handleItemClick}
        style={{
          textDecoration: match.status ? "line-through" : "none",
        }}
      >
        ({match.id}) {match.title} - {match.date}
        <button onClick={onDelete}>
          Delete
        </button>
      </div>
    );
  }