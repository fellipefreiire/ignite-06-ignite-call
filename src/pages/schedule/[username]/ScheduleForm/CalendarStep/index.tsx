import { Calendar } from '@/components/Calendar'
import * as S from './styles'

export function CalendarStep() {
  const isDateSelected = false

  return (
    <S.Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <S.TimePicker>
          <S.TimePickerHeader>
            terça-feira <span>20 de setembro</span>
          </S.TimePickerHeader>

          <S.TimePickerList>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
          </S.TimePickerList>
        </S.TimePicker>
      )}
    </S.Container>
  )
}
