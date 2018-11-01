import { unstable_createResource as createResource } from 'react-cache';

const ListingResource = createResource(
  sdkClient.listings.byWmId
)

const ListingCard = (wmid) => {
  const listing = ListingResource.read(wmid);
  return (
    <Card>
      <Title>{listing.name}</Title>
    </Card>
  )
}