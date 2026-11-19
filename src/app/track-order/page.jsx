import TrackOrderView from '../../components/track-order/TrackOrderView'

export const metadata = {
  title: 'Track Your Order | Prestige Computers',
  description:
    'Track your Prestige Computers laptop, custom gaming PC, and accessory shipments in real-time with live courier updates and delivery OTP status.',
  alternates: {
    canonical: '/track-order',
  },
}

export default function TrackOrderPage() {
  return <TrackOrderView />
}
