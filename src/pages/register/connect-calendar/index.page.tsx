import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import * as S from './styles'
import { ArrowRight, Check } from 'phosphor-react'
import { useRouter } from 'next/router'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  return (
    <S.Container>
      <S.Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </S.Header>

      <S.ConnectBox>
        <S.ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar <ArrowRight />
            </Button>
          )}
        </S.ConnectItem>

        {hasAuthError && (
          <S.AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesos ao Google Calendar.
          </S.AuthError>
        )}

        <Button
          onClick={handleNavigateToNextStep}
          type="submit"
          disabled={!isSignedIn}
        >
          Próximo passo <ArrowRight />
        </Button>
      </S.ConnectBox>
    </S.Container>
  )
}
