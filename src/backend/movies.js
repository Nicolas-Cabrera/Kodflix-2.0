{/* <img src={require('./Images/breakingbad.jpg')} alt='breaking bad' />
<img src={require('./Images/casadepapel.jpg')} alt='breaking bad' />
<img src={require('./Images/harrypotter.jpg')} alt='breaking bad' />
<img src={require('./Images/insidious.jpg')} alt='breaking bad' />
<img src={require('./Images/.jpg')} alt='breaking bad' />
<img src={require('./Images/theflash.jpg')} alt='breaking bad' />
<img src={require('./Images/toystory.jpg')} alt='breaking bad' />
<img src={require('./Images/xmen.jpg')} alt='breaking bad' /> */}

module.exports = function getMovies() {
    return [
        { id: 'breakingbad', rank: 5, name: 'Breaking Bad', detail: 'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.' },
        { id: 'casadepapel', rank: 1, name: 'Casa de Papel', detail: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.' },
        { id: 'harrypotter', rank: 2, name: 'Harry Potter', detail: 'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.' },
        { id: 'insidious', rank: 5, name: 'Insidious', detail: 'Josh and Renai Lambert relocate to a new house for a new start. While their son, Dalton, is exploring the attic he mysteriously falls and slips into a coma, the diagnosis of which yields no results.' },
        { id: 'theflash', rank: 4, name: 'The Flash', detail: 'Barry Allen, a forensic scientist with the Central City police force, is struck by lightning in a freak accident. When he wakes up after nine months, he discovers that he can achieve great speeds.' },
        { id: 'xmen', rank: 5, name: 'X-men', detail: "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy." },
        { id: 'it', rank: 3, name: 'It', detail: "Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown lives in the sewers and targets small innocent children." },
        { id: 'toystory', rank: 1, name: 'Toy Story', detail: "Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody's slight detour leads him to his long-lost friend Bo Peep. As Woody and Bo discuss the old days, they soon start to realize that they're worlds apart when it comes to what they want from life as a toy." }
    ];
}