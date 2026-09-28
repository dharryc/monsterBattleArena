type AttackButtonProps = {
    label: string,
    damage: number,
    onAttack: (damage: number) => void,
    disabled: boolean,
}

export const AttackButton = ({ label, damage, onAttack, disabled }: AttackButtonProps) => {
    return <button disabled={disabled} onClick={() => onAttack(damage)}>{label}</button>
}
