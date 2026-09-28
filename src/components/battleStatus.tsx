type BattleStatusProps = {
    playerName: string,
    playerHealth: number,
    monsterName: string,
    monsterHealth: number,
}

export const BattleStatus = ({ playerName, playerHealth, monsterName, monsterHealth }: BattleStatusProps) => {
    return (
        <div>
            <h2>Battle Status</h2>
            <p>{playerName}: {playerHealth} HP</p>
            <p>{monsterName}: {monsterHealth} HP</p>
        </div>
    )
}
