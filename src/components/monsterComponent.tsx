import type { Monster } from '../types/monster.js'

type MonsterComponentProps = {
    monster: Monster,
    currentHealth?: number,
}

export const MonsterComponent = ({
monster, currentHealth = monster.startingHealth,
}: MonsterComponentProps) => {
    return (
        <div className='monsterCard'>
            <h2>{monster.name}</h2>
            <p>Type: {monster.type}</p>
            <p>Health: {currentHealth}</p>
            <p>Attack Damage: {monster.attackDamage}</p>
        </div>
    )
}