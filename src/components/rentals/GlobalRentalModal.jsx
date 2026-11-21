'use client'

import { useStore } from '../../context/StoreContext'
import RentalBookingModal from './RentalBookingModal'

export default function GlobalRentalModal() {
  const { rentalModal, closeRentalModal } = useStore()
  if (!rentalModal?.open || !rentalModal?.product) return null

  return (
    <RentalBookingModal
      isOpen={rentalModal.open}
      product={rentalModal.product}
      onClose={closeRentalModal}
    />
  )
}
