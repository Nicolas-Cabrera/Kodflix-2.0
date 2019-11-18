import BreakingB from './Images/breakingbad.jpg';
import CasaDePapel from './Images/casadepapel.jpg';
import HarryPotter from './Images/harrypotter.jpg';
import Insidious from './Images/insidious.jpg';
import Flash from './Images/theflash.jpg';
import Xmen from './Images/xmen.jpg';

export default function getMovies() {
    return [
        { id: 'breakingbad', name: 'Breaking Bad', logo: BreakingB },
        { id: 'casadepapel', name: 'Casa de Papel', logo: CasaDePapel },
        { id: 'harrypotter', name: 'Harry Potter', logo: HarryPotter },
        { id: 'insidious', name: 'Insidious', logo: Insidious },
        { id: 'theflash', name: 'The Flash', logo: Flash },
        { id: 'x-men', name: 'X-men', logo: Xmen }
    ]
}