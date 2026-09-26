export interface Monster {
    name: string;
    type: MonsterType,
    startingHealth: number,
    attackDamage: number,
}


export type MonsterType = 
    | 'Fish' 
    | 'Turtle' 
    | 'Thing' 
    | 'Fire-Thing'
    | 'Uhhhh... oh dear... I don\'t think I can say that one... it\'s not offensive... I just can\'t... pronounce it?'
    | 'No, it isn\'t a bug, you\'re not supposed to be able to beat this guy';