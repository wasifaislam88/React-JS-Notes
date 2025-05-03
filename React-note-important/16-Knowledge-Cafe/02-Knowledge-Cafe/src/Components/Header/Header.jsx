//assets folder moddhe images rakhte hobe
//img location:   src->assets->images->profile.png
import portfoliooo from '../../assets/images/profile.png' //portfoliooo is js variable create by me here// je kono nam dewa jai.// img er nam tai variable nam hisebe dewa best

const Header = () => {

    return (
        // BOOKMARK:
        <header className='max-w-7xl mx-auto flex justify-between items-center p-4 border-b-2 '>
            <h1 className='text-4xl font-bold' >Knowledge Cafe</h1>
            <img src={portfoliooo} alt="img" />
            {/* use portfoliooo img as a variable */}
        </header>
    );
};

export default Header;