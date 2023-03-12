import { Calendar } from '@/components/Calendar'
import * as S from './styles'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState(null)

  const router = useRouter()

  const isDateSelected = !!selectedDate
  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    api
      .get(`/users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      .then((response) => {
        console.log(response)
      })
  }, [selectedDate, username])

  return (
    <S.Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <S.TimePicker>
          <S.TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
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
