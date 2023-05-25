import { DataComing } from "./Propstype";

function Home(props: DataComing) {
  return (
    <div>
      {props.name} eğitimine hoşgeldiniz. Kurs sayısı: {props.courseNumber} En
      güncel react eğitimi bu mu : {props.isBest ? "evet" : "hayır"}
    </div>
  );
}

export default Home;
