import { ButtonContainer, ButtonVariant } from './_styles.ts'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <>
      <ButtonContainer variant={variant}>Click me</ButtonContainer>
    </>
  )
}
