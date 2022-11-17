//1. import your card component
import LSComponent from "../ls-components";
//2. replace one of the LSComponent with your own component

// Wrap three cards with one of this component
const LayOut = ({ children }) => <div style={styles.layout}>{children}</div>;

const CardsList = () => {
  return (
    <main>
      <div style={{ marginTop: "50px", marginBottom: "200px" }}>
        <h1>Cohort 27 Graduates</h1>
        <hr />
      </div>

      <h2>Graduates</h2>
      <hr />

      <section>
        <LayOut>
          <LSComponent />
          <LSComponent />
          <LSComponent />
        </LayOut>

        <LayOut>
          <LSComponent />
          <LSComponent />
          <LSComponent />
        </LayOut>

        <LayOut>
          <LSComponent />
          <LSComponent />
          <LSComponent />
        </LayOut>
      </section>
    </main>
  );
};

export default CardsList;

const styles = {
  layout: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '100px'
  },
};
