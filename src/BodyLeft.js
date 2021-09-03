import React from 'react';
import './BodyLeft.css';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

const BodyLeft = () => {
    return (
        <div className="bodyLeft">
            <div className="pos">
                <div>
                    <HomeIcon />
                    Home
                </div>
                <div>
                    <ExploreIcon />
                    Explore
                </div>
                <div>
                    <SubscriptionsIcon />
                    Subcriptions
                </div>
                <div>
                    <LibraryAddIcon />
                    Library
                </div>
            </div>
        </div>
    )
}

export default BodyLeft
