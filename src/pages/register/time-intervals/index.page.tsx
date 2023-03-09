import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { useForm, useFieldArray } from 'react-hook-form'
import * as S from './styles'
import { ArrowRight } from 'phosphor-react'
import { z } from 'zod'
import { getWeekDays } from '@/utils/get-week-days'

const timeIntervalsFormSchema = z.object({})

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  async function handleSetTimeIntervals() {}

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

      <S.IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <S.IntervalsContainer>
          {fields.map((field, index) => {
            return (
              <S.IntervalItem key={field.id}>
                <S.IntervalDay>
                  <Checkbox checked={field.enabled} />
                  <Text>{weekDays[field.weekDay]}</Text>
                </S.IntervalDay>

                <S.IntervalInputs>
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </S.IntervalInputs>
              </S.IntervalItem>
            )
          })}
        </S.IntervalsContainer>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </S.IntervalBox>
    </S.Container>
  )
}
