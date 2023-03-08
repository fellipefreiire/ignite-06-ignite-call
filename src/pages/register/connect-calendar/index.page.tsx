import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import * as S from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  const session = useSession()
  async function handleRegister(data: RegisterFormData) {}

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
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar <ArrowRight />
          </Button>
        </S.ConnectItem>
        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </S.ConnectBox>
    </S.Container>
  )
}
