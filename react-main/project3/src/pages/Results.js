import { Outlet, Link } from 'react-router-dom'
function Results() {
    return (
        <div>
            <h1>Résultats</h1>
            <Link to="/initial">Résultat Initial</Link>
            <Link to="/final">Résultat Final</Link>
            <Outlet />
        </div>
    )
}
export default Results;