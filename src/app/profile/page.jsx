import ProfileView from '../../components/profile/ProfileView'

export const metadata = {
  title: 'My Profile & Account | Prestige Computers',
  description:
    'Manage your Prestige Computers account, profile details, active orders, laptop and desktop rentals, saved addresses, and security settings.',
  alternates: {
    canonical: '/profile',
  },
}

export default function ProfilePage() {
  return <ProfileView />
}
