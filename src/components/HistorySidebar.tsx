import { Clock, Eye, Heart, MessageCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

interface HistoryItem {
  id: string;
  title: string;
  timestamp: string;
  thumbnail: string;
  views: number;
  likes: number;
  comments: number;
}

const mockHistory: HistoryItem[] = [
  {
    id: "1",
    title: "Tech Review: Latest AI Tools",
    timestamp: "2 hours ago",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop",
    views: 15420,
    likes: 892,
    comments: 156
  },
  {
    id: "2", 
    title: "Productivity Hacks for Creators",
    timestamp: "1 day ago",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop",
    views: 8930,
    likes: 445,
    comments: 78
  },
  {
    id: "3",
    title: "Behind the Scenes: Studio Setup",
    timestamp: "3 days ago", 
    thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop",
    views: 12340,
    likes: 678,
    comments: 234
  },
  {
    id: "4",
    title: "Collaboration Tips & Tricks",
    timestamp: "1 week ago",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop", 
    views: 7890,
    likes: 334,
    comments: 89
  },
  {
    id: "5",
    title: "Content Planning Strategy",
    timestamp: "2 weeks ago",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
    views: 19450,
    likes: 1203,
    comments: 289
  }
];

export function HistorySidebar() {
  return (
    <div className="w-80 bg-sidebar border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-semibold text-sidebar-foreground flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          History
        </h2>
        <p className="text-sm text-muted-foreground mt-1">Past content analysis</p>
      </div>
      
      <ScrollArea className="h-[calc(100vh-120px)]">
        <div className="p-4 space-y-3">
          {mockHistory.map((item) => (
            <Card 
              key={item.id}
              className="p-4 glass hover-lift cursor-pointer animate-slide-up"
            >
              <div className="flex gap-3">
                <img 
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm text-card-foreground line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground mb-2">
                    {item.timestamp}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{(item.views / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}