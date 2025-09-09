import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import Particle from "../Particle";
import GitHubProjectCard from "./GitHubProjectCard";
import { fetchRepositories, getRepositoryStats } from "../../services/githubService";

function GitHubProjects() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    loadRepositories();
  }, []);

  const loadRepositories = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [repos, userStats] = await Promise.all([
        fetchRepositories(),
        getRepositoryStats()
      ]);
      
      setRepositories(repos);
      setStats(userStats);
    } catch (err) {
      setError(err.message);
      console.error('Error loading repositories:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    loadRepositories();
  };

  if (loading) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are some of my projects from GitHub.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '400px',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <Spinner animation="border" variant="primary" />
            <p style={{ color: 'white' }}>Loading projects from GitHub...</p>
          </div>
        </Container>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are some of my projects from GitHub.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={8}>
              <Alert variant="danger">
                <Alert.Heading>Error Loading Projects</Alert.Heading>
                <p>{error}</p>
                <Button variant="outline-danger" onClick={handleRefresh}>
                  Try Again
                </Button>
              </Alert>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my projects from GitHub. 
          {stats && (
            <span style={{ fontSize: '0.9rem', color: '#ccc', display: 'block', marginTop: '0.5rem' }}>
              {stats.totalRepos} repositories • {stats.totalStars} stars • {stats.followers} followers
            </span>
          )}
        </p>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Button 
            variant="outline-primary" 
            onClick={handleRefresh}
            style={{ marginBottom: '1rem' }}
          >
            🔄 Refresh Projects
          </Button>
        </div>

        {repositories.length === 0 ? (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={8}>
              <Alert variant="info">
                <Alert.Heading>No Projects Found</Alert.Heading>
                <p>No repositories found or all repositories are private.</p>
                <Button variant="outline-info" onClick={handleRefresh}>
                  Refresh
                </Button>
              </Alert>
            </Col>
          </Row>
        ) : (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {repositories.map((repo) => (
              <Col md={4} className="project-card" key={repo.id} style={{ marginBottom: '2rem' }}>
                <GitHubProjectCard
                  title={repo.title}
                  description={repo.description}
                  ghLink={repo.ghLink}
                  demoLink={repo.demoLink}
                  imgPath={repo.imgPath}
                  language={repo.language}
                  stars={repo.stars}
                  forks={repo.forks}
                  topics={repo.topics}
                  updatedAt={repo.updatedAt}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default GitHubProjects;
