import { mockAnnouncements } from "../data";
import Announcement from "./Announcement";

const AnnouncementContainer = () => {
	return (
		<div className="border-gray-900 border-l-2 p-4">
      <h1 className="text-3xl font-bold py-2 border-b-2 ">Announcements</h1>
			<Announcement
				title="General Announcements"
				content={mockAnnouncements}
			/>
		</div>
	);
};

export default AnnouncementContainer;
