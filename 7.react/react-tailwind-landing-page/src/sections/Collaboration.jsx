import CollabFigure from "../components/CollabFigure";
import CollabList from "../components/CollabList";

export default function Collaboration() {
    return (
        <section className="container lg:flex">
            {/* first part */}
            <CollabList />

            {/* APPS figure  */}
            <CollabFigure />
        </section>
    );
}
