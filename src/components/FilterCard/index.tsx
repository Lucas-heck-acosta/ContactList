import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  text: string
}
const CardFilter = ({ active, counter, text }: Props) => {
  return (
    <S.Card active={active}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{text}</S.Label>
    </S.Card>
  )
}

export default CardFilter
