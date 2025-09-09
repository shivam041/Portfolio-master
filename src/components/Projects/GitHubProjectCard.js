import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsStar, BsGit } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";

function GitHubProjectCard(props) {
  const {
    title,
    description,
    ghLink,
    demoLink,
    imgPath,
    language,
    stars,
    forks,
    topics,
    updatedAt
  } = props;

  // Format the last updated date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
    return `${Math.ceil(diffDays / 365)} years ago`;
  };

  return (
    <Card className="project-card-view" style={{ height: '100%' }}>
      <Card.Img 
        variant="top" 
        src={imgPath} 
        alt="card-img" 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Card.Title style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            {title}
          </Card.Title>
          
          {/* Language and stats */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            {language && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <FaLanguage style={{ color: '#cd5ff8' }} />
                <span style={{ fontSize: '0.9rem', color: '#ccc' }}>{language}</span>
              </div>
            )}
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <BsStar style={{ color: '#ffd700' }} />
                <span style={{ fontSize: '0.9rem', color: '#ccc' }}>{stars}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <BsGit style={{ color: '#cd5ff8' }} />
                <span style={{ fontSize: '0.9rem', color: '#ccc' }}>{forks}</span>
              </div>
            </div>
          </div>
          
          {/* Topics */}
          {topics && topics.length > 0 && (
            <div style={{ marginBottom: '0.5rem' }}>
              {topics.slice(0, 3).map((topic, index) => (
                <Badge 
                  key={index} 
                  bg="secondary" 
                  style={{ 
                    marginRight: '0.25rem', 
                    marginBottom: '0.25rem',
                    fontSize: '0.7rem'
                  }}
                >
                  {topic}
                </Badge>
              ))}
              {topics.length > 3 && (
                <Badge bg="outline-secondary" style={{ fontSize: '0.7rem' }}>
                  +{topics.length - 3} more
                </Badge>
              )}
            </div>
          )}
          
          {/* Last updated */}
          <small style={{ color: '#888', fontSize: '0.8rem' }}>
            Updated {formatDate(updatedAt)}
          </small>
        </div>
        
        <Card.Text style={{ 
          textAlign: "justify", 
          flexGrow: 1,
          marginBottom: '1rem'
        }}>
          {description}
        </Card.Text>
        
        <div style={{ marginTop: 'auto' }}>
          <Button 
            variant="primary" 
            href={ghLink} 
            target="_blank"
            style={{ marginRight: '0.5rem' }}
          >
            <BsGithub /> &nbsp;
            GitHub
          </Button>
          
          {demoLink && (
            <Button
              variant="outline-primary"
              href={demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp;
              Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default GitHubProjectCard;
