export const formatPrice = (value: number | null | undefined, fallback = '0,00') => (typeof value === 'number' ? value.toFixed(2).replace('.', ',') : fallback)
