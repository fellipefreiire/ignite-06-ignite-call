import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import * as S from './styles'
import { ArrowRight } from 'phosphor-react'

export default function TimeIntervals() {
  return (
    <S.Container>
      <S.Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </S.Header>

      <S.IntervalBox as="form">
        <S.IntervalsContainer>
          <S.IntervalItem>
            <S.IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </S.IntervalDay>

            <S.IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </S.IntervalInputs>
          </S.IntervalItem>
          <S.IntervalItem>
            <S.IntervalDay>
              <Checkbox />
              <Text>Terça-feira</Text>
            </S.IntervalDay>

            <S.IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </S.IntervalInputs>
          </S.IntervalItem>
        </S.IntervalsContainer>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </S.IntervalBox>
    </S.Container>
  )
}
