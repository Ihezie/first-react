const Book = (props) => {
    const { img, title, author, index } = props;
    const number = index + 1;
    return (
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span className="number">{`#${number}`}</span>
      </article>
    );
};
export default Book;