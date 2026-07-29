"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      slug: "build-mvp-no-waste",
      title: "How to build an MVP without wasting six months",
      category: "Product Strategy",
      date: "July 12, 2026",
      readTime: "5 min read",
      excerpt: "Startup velocity defines success. Learn how to scope your MVP, defer technical debt responsibly, and ship within weeks rather than months."
    },
    {
      slug: "when-flutter-right-choice",
      title: "When Flutter is the right choice (and when it isn't)",
      category: "Mobile Architecture",
      date: "June 28, 2026",
      readTime: "6 min read",
      excerpt: "An honest breakdown of cross-platform mobile frameworks. Evaluate the UI, latency, and cost benefits of Flutter for your next product."
    },
    {
      slug: "startup-hiring-mistakes",
      title: "Common mistakes startups make before hiring developers",
      category: "Product Management",
      date: "June 14, 2026",
      readTime: "4 min read",
      excerpt: "Avoid the typical alignment traps. How to structure your specifications, define timelines, and qualify engineering leads before starting code."
    },
    {
      slug: "lessons-shipping-closepitch",
      title: "Lessons from shipping ClosePitch",
      category: "Engineering Retrospective",
      date: "May 20, 2026",
      readTime: "7 min read",
      excerpt: "An engineering review of building an AI-powered sales platform. Caching, JSON validation, microservices boundaries, and AWS deployments."
    },
    {
      slug: "ai-features-improve-ux",
      title: "AI features that actually improve user experience",
      category: "AI & Product Design",
      date: "May 02, 2026",
      readTime: "5 min read",
      excerpt: "Move past chatbot widgets. Learn how to design localized context layers and prompt boundaries that deliver real utility to your users."
    }
  ];

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="blog-page-wrapper">
      <section className="blog-hero">
        <div className="container">
          <span className="section-tag">THOUGHT LEADERSHIP</span>
          <h1>Product Engineering Articles</h1>
          <p className="subtitle">
            Founder-centric guides and technical reviews covering mobile development, clean architecture, and AI product execution.
          </p>
        </div>
      </section>

      <section className="blog-posts-section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {/* Featured Article Banner */}
          {featuredPost && (
            <article className="blog-post-card featured-banner-card card-glass m-b-40">
              <div className="blog-card-grid featured-grid">
                <div className="blog-illustration-box featured-illus-box">
                  <div className="blog-illus strategy">
                    <div className="bar" style={{ height: "40%" }}></div>
                    <div className="bar" style={{ height: "70%" }}></div>
                    <div className="bar" style={{ height: "95%" }}></div>
                  </div>
                </div>

                <div className="blog-content-box">
                  <div className="post-header-meta">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="featured-badge font-headings">FEATURED POST</span>
                      <span className="post-category">{featuredPost.category}</span>
                    </div>
                    <div className="post-meta-details font-headings">
                      <Calendar size={12} />
                      <span>{featuredPost.date}</span>
                      <span className="meta-dot">&bull;</span>
                      <Clock size={12} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h2>
                    <Link href={`/blog/${featuredPost.slug}`} className="post-title-link">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="featured-excerpt">{featuredPost.excerpt}</p>

                  <div className="post-author-line">
                    <span className="author-lbl">By</span>
                    <strong className="author-name">Ashwani Kumar Singh</strong>
                    <span className="meta-dot">&bull;</span>
                    <span className="last-updated">Updated July 2026</span>
                  </div>

                  <div className="post-footer m-t-20">
                    <Link href={`/blog/${featuredPost.slug}`} className="read-more-link">
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </Link>

                    <div className="blog-share-row">
                      <span className="share-lbl">Share:</span>
                      <a
                        href={`https://linkedin.com/sharing/share-offsite/?url=https://ashwanisingh.dev/blog/${featuredPost.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-link-btn"
                        aria-label="Share on LinkedIn"
                      >
                        LinkedIn
                      </a>
                      <span className="share-divider">/</span>
                      <a
                        href={`https://twitter.com/intent/tweet?url=https://ashwanisingh.dev/blog/${featuredPost.slug}&text=${encodeURIComponent(featuredPost.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-link-btn"
                        aria-label="Share on Twitter"
                      >
                        X
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Regular Posts Grid */}
          <div className="posts-grid">
            {regularPosts.map((post) => (
              <article key={post.slug} className="blog-post-card card-glass">
                <div className="blog-card-grid">
                  <div className="blog-illustration-box">
                    {post.category.includes("Strategy") && (
                      <div className="blog-illus strategy">
                        <div className="bar" style={{ height: "40%" }}></div>
                        <div className="bar" style={{ height: "70%" }}></div>
                        <div className="bar" style={{ height: "95%" }}></div>
                      </div>
                    )}
                    {post.category.includes("Architecture") && (
                      <div className="blog-illus architecture">
                        <div className="node master"></div>
                        <div className="node sub"></div>
                        <div className="node sub2"></div>
                        <div className="line"></div>
                        <div className="line second"></div>
                      </div>
                    )}
                    {post.category.includes("Management") && (
                      <div className="blog-illus management">
                        <div className="chk done">✓</div>
                        <div className="chk done">✓</div>
                        <div className="chk"></div>
                      </div>
                    )}
                    {post.category.includes("Retrospective") && (
                      <div className="blog-illus retrospective">
                        <div className="retro-circle"></div>
                        <div className="retro-arrow"></div>
                      </div>
                    )}
                    {post.category.includes("UX") && (
                      <div className="blog-illus ux">
                        <div className="wireframe-mock"></div>
                        <div className="cursor-illus"></div>
                      </div>
                    )}
                  </div>

                  <div className="blog-content-box">
                    <div className="post-header-meta">
                      <span className="post-category">{post.category}</span>
                      <div className="post-meta-details font-headings">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                        <span className="meta-dot">&bull;</span>
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3>
                      <Link href={`/blog/${post.slug}`} className="post-title-link">
                        {post.title}
                      </Link>
                    </h3>
                    <p>{post.excerpt}</p>

                    <div className="post-author-line">
                      <span className="author-lbl">By</span>
                      <strong className="author-name">Ashwani Kumar Singh</strong>
                      <span className="meta-dot">&bull;</span>
                      <span className="last-updated">Updated July 2026</span>
                    </div>

                    <div className="post-footer m-t-20">
                      <Link href={`/blog/${post.slug}`} className="read-more-link">
                        <span>Read Article</span>
                        <ArrowRight size={14} />
                      </Link>

                      <div className="blog-share-row">
                        <span className="share-lbl">Share:</span>
                        <a
                          href={`https://linkedin.com/sharing/share-offsite/?url=https://ashwanisingh.dev/blog/${post.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="share-link-btn"
                          aria-label="Share on LinkedIn"
                        >
                          LinkedIn
                        </a>
                        <span className="share-divider">/</span>
                        <a
                          href={`https://twitter.com/intent/tweet?url=https://ashwanisingh.dev/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="share-link-btn"
                          aria-label="Share on Twitter"
                        >
                          X
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-page-wrapper {
          padding-bottom: 80px;
        }

        /* Hero */
        .blog-hero {
          padding: 80px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .blog-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .blog-hero .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
        }

        /* Posts Grid */
        .blog-posts-section {
          padding: 60px 0;
        }
        .posts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          max-width: 800px;
          margin: 0 auto;
        }
        .blog-post-card {
          padding: 36px;
        }
        .blog-post-card:hover {
          border-color: var(--accent-blue-border);
          transform: translateY(-2px);
        }
        .post-header-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .post-category {
          font-family: var(--font-headings);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent-blue-light);
        }
        .post-meta-details {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted);
        }
        .meta-dot {
          color: var(--text-muted);
        }
        .blog-post-card h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }
        .post-title-link:hover {
          color: var(--accent-blue-light);
        }
        .blog-post-card p {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent-blue-light);
        }
        .read-more-link:hover {
          color: #fff;
        }

        /* Blog Card Grid Layout */
        .blog-card-grid {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 30px;
          align-items: start;
        }
        .blog-illustration-box {
          width: 140px;
          height: 140px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.005);
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Featured Banner Card specific overrides */
        .featured-banner-card {
          border-color: rgba(59, 130, 246, 0.25) !important;
          box-shadow: 0 20px 40px -15px rgba(59, 130, 246, 0.05), var(--blue-glow-shadow);
        }
        .featured-banner-card:hover {
          border-color: rgba(59, 130, 246, 0.45) !important;
        }
        .featured-grid {
          grid-template-columns: 200px 1fr;
        }
        .featured-illus-box {
          width: 200px;
          height: 200px;
        }
        .featured-badge {
          font-family: var(--font-headings);
          font-size: 8px;
          font-weight: 700;
          color: #fff;
          background: var(--accent-blue);
          border: 1px solid var(--accent-blue-border);
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }
        .featured-excerpt {
          font-size: 16px !important;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        
        /* Category Illustrations */
        .blog-illus {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .blog-illus.strategy {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
          display: flex;
          align-items: flex-end;
          gap: 6px;
          padding: 24px;
        }
        .blog-illus.strategy .bar {
          flex: 1;
          background: linear-gradient(180deg, var(--accent-blue-light), var(--accent-blue));
          border-radius: 2px 2px 0 0;
        }
        
        .blog-illus.architecture {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .blog-illus.architecture .node {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid var(--accent-purple);
          background: #0f131a;
        }
        .blog-illus.architecture .node.master {
          width: 20px;
          height: 20px;
          top: 30px;
          left: calc(50% - 10px);
          border-color: #fff;
        }
        .blog-illus.architecture .node.sub {
          width: 14px;
          height: 14px;
          bottom: 40px;
          left: 30px;
        }
        .blog-illus.architecture .node.sub2 {
          width: 14px;
          height: 14px;
          bottom: 40px;
          right: 30px;
        }
        .blog-illus.architecture .line {
          position: absolute;
          width: 2px;
          height: 35px;
          background: var(--border-color);
          top: 48px;
          left: 45px;
          transform: rotate(35deg);
          z-index: 1;
        }
        .blog-illus.architecture .line.second {
          left: 92px;
          transform: rotate(-35deg);
        }
        
        .blog-illus.management {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px;
        }
        .blog-illus.management .chk {
          width: 100%;
          height: 18px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.01);
          font-size: 10px;
          display: flex;
          align-items: center;
          padding-left: 6px;
          color: var(--text-muted);
        }
        .blog-illus.management .chk.done {
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(16, 185, 129, 0.05);
          color: #10b981;
        }
        
        .blog-illus.retrospective {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
        }
        .blog-illus.retrospective .retro-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px dashed rgba(245, 158, 11, 0.3);
        }
        
        .blog-illus.ux {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
          padding: 20px;
        }
        .blog-illus.ux .wireframe-mock {
          width: 100%;
          height: 100%;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background: rgba(255,255,255,0.01);
          position: relative;
        }
        
        /* Author line */
        .post-author-line {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 14px;
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
        }
        .author-name {
          color: var(--text-secondary);
        }
        
        /* Share row */
        .blog-share-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
        }
        .share-lbl {
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }
        .share-link-btn {
          color: var(--text-secondary);
        }
        .share-link-btn:hover {
          color: var(--accent-blue-light);
        }
        .share-divider {
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .blog-card-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
          .blog-illustration-box {
            width: 100%;
            height: 120px;
          }
          .featured-illus-box {
            width: 100% !important;
            height: 140px !important;
          }
          .blog-post-card {
            padding: 24px;
          }
          .blog-hero h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}
