import { Button, Heading, MultiStep, Text, TextArea } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import * as S from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateFormData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()

  console.log(session)

  async function handleUpdateProfile(data: UpdateFormData) {}

  return (
    <S.Container>
      <S.Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>Por último, uma breve descrição e uma foto de perfil.</Text>

        <MultiStep size={4} currentStep={4} />
      </S.Header>

      <S.ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <label>
          <Text size="sm">Foto de perfil</Text>
        </label>

        <label>
          <Text size="sm">Sobre você</Text>
          <TextArea {...register('bio')} />
          <S.FormAnnotation size="sm">
            Fale um pouco sobre você. Isto será exibido em sua página pessoal.
          </S.FormAnnotation>
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Finalizar <ArrowRight />
        </Button>
      </S.ProfileBox>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
