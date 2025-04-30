import {AlertTriangle} from 'lucide-react'

import Empty from '@/components/layout/empty'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Empty
        icon={AlertTriangle}
        title="Página não encontrada"
        description="A página que você está procurando não existe ou foi removida."
        buttonLabel="Voltar para a página inicial"
        buttonHref="/"
      />
    </div>
  )
}
