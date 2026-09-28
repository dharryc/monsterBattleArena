import { useState } from 'react'
import './App.css'
import { monsterTypes, unbeatableType, unpronounceableType, type Monster } from './types/monster'
import { MonsterComponent } from './components/monsterComponent'
import { AttackButton } from './components/attackButton'
import { BattleStatus } from './components/battleStatus'

const monsterNames = ['Cave Troll', 'Bielzibub', 'Johnny', 'Cigarettes', 'The final exam', "JIDAPA", "I GOT DIVORCED FOR THIS CLASS AND YOU AREN'T EVEN GIVING ME EXTRA CREDIT"]

// I had AI help me with this part, but I did the rest
const randomItem = <T,>(items: readonly T[]) => items[Math.floor(Math.random() * items.length)]

const randomMonster = (): Monster => {
  const type = randomItem(monsterTypes)
  return {
    name: type === unpronounceableType ? '█████████' : randomItem(monsterNames),
    type,
    startingHealth: 100,
    attackDamage: type === unbeatableType ? 15000 : 5 + Math.floor(Math.random() * 21),
  }
}

function App() {
  const [playerName, setPlayerName] = useState('')
  const [playerHealth, setPlayerHealth] = useState(100)
  const [monster, setMonster] = useState(randomMonster)
  const [monsterHealth, setMonsterHealth] = useState(monster.startingHealth)

  const attackMonster = (damage: number) => setMonsterHealth(h => Math.max(h - damage, 0))
  const battleOver = playerHealth <= 0 || monsterHealth <= 0
  const cannotAttack = battleOver || monster.type === unbeatableType

  const resetBattle = () => {
    const newMonster = randomMonster()
    setMonster(newMonster)
    setPlayerHealth(100)
    setMonsterHealth(newMonster.startingHealth)
  }

  return (
    <div>
      <h1>HARRY'S BEAUTIFUL SPECTACULAR AMAZING SUPERB AWESOME INCREDIBLE INCOMPREHENSIBLE SCINTILATING UNBELIEVABLE AWE-INSPIRING AND REDICULOUSLY POORLY SPELLED AND UNREASONABLY SILLY MONSTER BATTLE ARENA!!!</h1>

      <label>
        Player Name: <input defaultValue={playerName} onKeyUp={e => { if (e.key === 'Enter') setPlayerName(e.currentTarget.value) }} />
      </label>

      {playerName && (
        <>
          <h2>{playerName} vs. {monster.name}</h2>

          <h2>Player</h2>
          <p>Health: {playerHealth}</p>
          {playerHealth <= 0 && <p>You have been defeated!</p>}

          <MonsterComponent monster={monster} currentHealth={monsterHealth} />

          <div>
            <AttackButton label="Normal Attack" damage={10} onAttack={attackMonster} disabled={cannotAttack} />
            <AttackButton label="Heavy Attack" damage={20} onAttack={attackMonster} disabled={cannotAttack} />
            <AttackButton label="Ultimate Attack" damage={30} onAttack={attackMonster} disabled={cannotAttack} />
          </div>

          <div>
            <button disabled={battleOver} onClick={() => setPlayerHealth(h => Math.max(h - monster.attackDamage, 0))}>Monster Attacks</button>
            <button disabled={battleOver} onClick={() => setPlayerHealth(h => Math.min(h + 20, 100))}>Drink Potion</button>
            <button onClick={resetBattle}>Reset Battle</button>
          </div>

          <p>{monsterHealth > 0 ? 'The monster is still fighting!' : 'The monster has been defeated!'}</p>

          <BattleStatus playerName={playerName} playerHealth={playerHealth} monsterName={monster.name} monsterHealth={monsterHealth} />
        </>
      )}
    </div>
  )
}

export default App
