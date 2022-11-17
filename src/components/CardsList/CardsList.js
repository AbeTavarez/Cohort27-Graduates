import ABComponent from "../ab-component";
import ASComponent from '../as-component'

const CardsList = () => {
  return (
    <main>
      <h1>Cohort 27 Graduates</h1>
      <hr/>

      <h2>Instructors</h2>
      <hr/>

      <section style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
        <ABComponent />
        <ABComponent />
      </section>

        <h2>Graduates</h2>
        <hr/>

      <section>
        <ASComponent/>
      </section>
    </main>
  );
};

export default CardsList;
