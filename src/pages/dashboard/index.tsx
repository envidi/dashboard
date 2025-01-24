import { Dashboard } from '@/screens';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DashboardPage = () => {
  return <Dashboard />;
};
export default DashboardPage;

export async function getStaticProps(context: { locale: string }) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
